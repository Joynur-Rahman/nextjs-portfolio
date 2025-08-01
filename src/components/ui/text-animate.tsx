"use client"

import { FC, useEffect, useRef } from "react"
import { HTMLMotionProps, motion, useAnimation, useInView, Variants } from "framer-motion"

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "popIn"
  | "shiftInUp"
  | "rollIn"
  | "whipIn"
  | "whipInUp"
  | "calmInUp"

interface Props extends HTMLMotionProps<"div"> {
  text: string
  type?: AnimationType
  delay?: number
  duration?: number
}

// Explicitly typed variants to satisfy Framer Motion and TypeScript
const animationVariants: Record<
  AnimationType,
  {
    container: Variants | ((i?: number) => Variants)
    child: Variants
  }
> = {
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
      }),
    },
    child: {
      visible: {
        opacity: 1,
        y: [0, -10, 0], // keyframe array for y
        transition: {
          type: "keyframes", // <-- must be keyframes here
          duration: 0.6,
          times: [0, 0.5, 1],
          damping: 12, // spring params ignored for keyframes but safe to keep
          stiffness: 100,
        },
      },
      hidden: { opacity: 0, y: 10 },
    },
  },

  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 20 },
    },
  },

  popIn: {
    container: {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
      },
    },
    child: {
      visible: {
        opacity: 1,
        scale: 1.1,
        transition: { type: "spring", damping: 15, stiffness: 400 },
      },
      hidden: { opacity: 0, scale: 0 },
    },
  },

  calmInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.125, 0.92, 0.69, 0.975],
          duration: 0.75,
        },
      },
    },
  },

  shiftInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "100%",
        transition: {
          ease: [0.75, 0, 0.25, 1],
          duration: 0.6,
        },
      },
      visible: {
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },

  whipInUp: {
    container: {
      hidden: {},
      visible: (i: number = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.5, -0.15, 0.25, 1.05],
          duration: 0.75,
        },
      },
    },
  },

  rollIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.9,
          ease: [0.65, 0, 0.75, 0.65],
        },
      },
    },
  },

  whipIn: {
    container: {
      hidden: {},
      visible: {},
    },
    child: {
      hidden: {
        opacity: 0,
        y: `0.35em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 0.45,
          ease: [0.75, 0.05, 0.85, 1],
        },
      },
    },
  },
}

const TextAnimate: FC<Props> = ({
  text,
  type = "whipInUp",
  ...props
}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false }) // Animate on every entry

  const ctrls = useAnimation()
  const letters = Array.from(text)

  // Retrieve container and child, handling functional container variants with default param
  const containerVariant =
    typeof animationVariants[type].container === "function"
      ? animationVariants[type].container(1)
      : animationVariants[type].container
  const childVariant = animationVariants[type].child

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    } else {
      ctrls.start("hidden")
    }
  }, [ctrls, isInView])

  // Special handling for rollIn and whipIn which animate word-by-word
  if (type === "rollIn" || type === "whipIn") {
    return (
      <h2
        ref={ref}
        className="mt-10 font-black text-black dark:text-neutral-100 py-5 pb-8 px-8 "
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[0.25em] whitespace-nowrap"
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={containerVariant}
            transition={{
              delayChildren: index * 0.3,
              staggerChildren: 0.025,
            }}
          >
            {word.split("").map((character, charIndex) => (
              <motion.span
                key={charIndex}
                aria-hidden="true"
                variants={childVariant}
                className="inline-block -mr-[0.01em]"
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h2>
    )
  }

  // Default animation: animate all letters individually
  return (
    <motion.h2
      ref={ref}
      style={{ display: "flex", overflow: "hidden" }}
      role="heading"
      variants={containerVariant}
      initial="hidden"
      animate={ctrls}
      className="mt-10 text-4xl font-black text-black dark:text-neutral-100 py-5 pb-8 px-8 md:text-5xl"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={childVariant}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export { TextAnimate }
export default TextAnimate

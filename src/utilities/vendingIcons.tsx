import { Icon } from '@iconify/react'

export const vendingIcons = (nameIcon: string, size: number) => {
  switch (nameIcon) {
    case '/#home':
      return <Icon width={size} icon="fluent:home-12-regular" />

    case '/#aboutme':
      return <Icon width={size} icon="fluent:person-12-regular" />

    case '/#techsandtools':
      return <Icon width={size} icon="fluent:stack-16-regular" />

    case '/#projects':
      return <Icon width={size} icon="fluent:grid-24-regular" />

    case '/#contact':
      return <Icon width={size} icon="fluent:contact-card-16-regular" />

    case 'settings':
      return <Icon width={size} icon="fluent:settings-32-regular" />

    case 'back':
      return <Icon width={size} icon="ic:round-keyboard-backspace" />

    case 'link':
      return <Icon width={size} icon="ph:link-fill" />

    case 'menu':
      return <Icon width={size} icon="bi:menu-button" />

    case 'earth':
      return <Icon width={size} icon="fluent:earth-16-regular" />

    case 'linkedin':
      return <Icon width={size} icon="ri:linkedin-fill" />

    case 'github':
      return <Icon width={size} icon="bi:github" />

    case 'instagram':
      return <Icon width={size} icon="ri:instagram-line" />

    case 'dark':
      return <Icon width={size} icon="akar-icons:moon" />

    case 'light':
      return <Icon width={size} icon="akar-icons:sun" />

    case 'CV':
      return <Icon width={size} icon="ph:file-pdf-duotone" />

    case 'play-back':
      return <Icon width={size} icon="ion:play-back" />

    case 'play-forward':
      return <Icon width={size} icon="ion:play-forward" />

    case 'play':
      return <Icon width={size} icon="ion:play" />

    case 'pause':
      return <Icon width={size} icon="ion:pause" />

    case 'mouse':
      return <Icon width={size} icon="clarity:mouse-solid" />

    case 'arrow':
      return <Icon width={size} icon="bxs:up-arrow" />

    case 'Colombia':
      return <Icon width={size} icon="twemoji:flag-colombia" />

    case 'en':
      return <p className='center' style={{ width: `${size}px`, height: `${size}px`, fontWeight: 'bold' }}>EN</p>

    case 'es':
      return <p className='center' style={{ width: `${size}px`, height: `${size}px`, fontWeight: 'bold' } }>ES</p>

      // tech and tools

    case 'css':
      return <Icon width={size} icon="skill-icons:css" />

    case 'html':
      return <Icon width={size} icon="skill-icons:html" />

    case 'javascript':
      return <Icon width={size} icon="skill-icons:javascript" />

    case 'typescript':
      return <Icon width={size} icon="skill-icons:typescript" />

    case 'react':
      return <Icon width={size} icon="skill-icons:react-dark" />

    case 'sass':
      return <Icon width={size} icon="skill-icons:sass" />

    case 'tailwind':
      return <Icon width={size} icon="skill-icons:tailwindcss-dark" />

    case 'json':
      return <Icon width={size} icon="logos:json" />

    case 'nextjs':
      return <Icon width={size} icon="skill-icons:nextjs-dark" />

    case 'api':
      return <Icon width={size} icon="eos-icons:api" />

    case 'react router':
      return <Icon width={size} icon="devicon:reactrouter" />

    case 'react query':
      return <Icon width={size} icon="logos:react-query-icon" />

    case 'redux':
      return <Icon width={size} icon="skill-icons:redux" />

    case 'expressjs':
      return <Icon width={size} icon="skill-icons:expressjs-dark" />

    case 'postgresql':
      return <Icon width={size} icon="skill-icons:postgresql-dark" />

    case 'nodejs':
      return <Icon width={size} icon="skill-icons:nodejs-dark" />

    case 'sequelize':
      return <Icon width={size} icon="skill-icons:sequelize-dark" />

    case 'prisma':
      return <Icon width={size} icon="skill-icons:prisma" />

    case 'vite':
      return <Icon width={size} icon="skill-icons:vite-dark" />

    case 'python':
      return <Icon width={size} icon="skill-icons:python-dark" />

    case 'npm':
      return <Icon width={size} icon="logos:npm-icon" />

    case 'eslint':
      return <Icon width={size} icon="logos:eslint" />

    case 'webpack':
      return <Icon width={size} icon="skill-icons:webpack-dark" />

    case 'vscode':
      return <Icon width={size} icon="skill-icons:vscode-dark" />

    case 'git':
      return <Icon width={size} icon="skill-icons:git" />

    case 'aws':
      return <Icon width={size} icon="skill-icons:aws-dark" />

    case 'firebase':
      return <Icon width={size} icon="logos:firebase" />

    case 'insomnia':
      return <Icon width={size} icon="logos:insomnia" />

    case 'babel':
      return <Icon width={size} icon="skill-icons:babel" />

    case 'linux':
      return <Icon width={size} icon="skill-icons:linux-dark" />

    case 'ubuntu':
      return <Icon width={size} icon="logos:ubuntu" />

    case 'vercel':
      return <Icon width={size} icon="skill-icons:vercel-dark" />

    case 'netlify':
      return <Icon width={size} icon="skill-icons:netlify-dark" />

    case 'windows':
      return <Icon width={size} icon="devicon:windows11" />

    case 'open ai':
      return <Icon width={size} icon="logos:openai-icon" />

    case 'figma':
      return <Icon width={size} icon="skill-icons:figma-dark" />

    case 'illustrator':
      return <Icon width={size} icon="skill-icons:illustrator" />

    case 'photoshop':
      return <Icon width={size} icon="skill-icons:photoshop" />

    case 'cloudinary':
      return <Icon width={size} icon="logos:cloudinary-icon" />

    case 'mongodb':
      return <Icon width={size} icon="skill-icons:mongodb" />

    case 'jwt':
      return <Icon width={size} icon="logos:jwt-icon" />

    default:
      return <Icon width={size} icon="ic:outline-disabled-by-default" />
  }
}

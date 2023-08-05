import { Icon } from '@iconify/react'

export const vendingIcons = (nameIcon: string, size: number) => {
  switch (nameIcon) {
    case '/#home':
      return <Icon width={size} icon="fluent:home-12-regular" />

    case '/#aboutme':
      return <Icon width={size} icon="fluent:person-12-regular" />

    case '/#techandtools':
      return <Icon width={size} icon="fluent:stack-16-regular" />

    case '/#projects':
      return <Icon width={size} icon="fluent:grid-24-regular" />

    case '/#contact':
      return <Icon width={size} icon="fluent:contact-card-16-regular" />

    case 'settings':
      return <Icon width={size} icon="fluent:settings-32-regular" />

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

    case 'en':
      return <p className='center' style={{ width: `${size}px`, height: `${size}px`, fontWeight: 'bold' }}>EN</p>

    case 'es':
      return <p className='center' style={{ width: `${size}px`, height: `${size}px`, fontWeight: 'bold' } }>ES</p>

    default:
      return <Icon width={size} icon="ic:outline-disabled-by-default" />
  }
}

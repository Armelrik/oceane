export const headerLinks = [
  {
    label: 'Accueil',
    route: '/',
  },
  {
    label: 'Créer événement',
    route: '/events/create',
  },
  {
    label: 'Mon Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}

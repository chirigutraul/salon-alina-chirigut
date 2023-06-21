
export const servicesLabels = new Map<string, string>([
  ["manichiura_constructie_gel", "Manichiura constructie gel"],
  ["manichiura_semipermanenta", "Manichiura semipermanenta"],
  ["pedichiura_semipermanent", "Pedichiura semipermanenta"],
  ["stilizare_cuticula", "Stilizare cuticula"],
  ["demontare_unghii", "Demontare unghii"],
  ["intretinere_gel", "Intretinere gel"],
  ["intretinere_semipermanent", "Intretinere semipermanent"],
]);

export const appointmentStatuses = new Map<string, string>([
  ["pending", "In asteptare"],
  ["approved", "Confirmata"],
  ["canceled", "Anulata"],
]);

export const popularServices = [
  {
    name: 'Constructie gel',
    description: 'Intretinerea unghiilor cu gel asigura o durabilitate extinsa a manichiurii.',
    picture: 'https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80',
  },
  {
    name: 'Intretinere',
    description: 'Constructia unghiilor cu gel rezulta intr-o manichiura de lunga durata.',
    picture: 'https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80',
  },
  {
    name: 'Semi-permanent',
    description: 'Constructia unghiilor cu gel rezulta intr-o manichiura de lunga durata.',
    picture: 'https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80',
  },
];

const CLIENTS_API_URL = process.env.API_URI + 'clients';
const SERVICES_API_URL = process.env.API_URI + 'services';
const APPOINTMENTS_API_URL = process.env.API_URI + 'appointments';

const ERROR_MESSAGES = {
  ID_NOT_FOUND: 'Id-ul clientului nu a fost gasit',
  USER_NOT_FOUND: 'Nu a fost gasit un user.'
}

export {
  CLIENTS_API_URL,
  SERVICES_API_URL,
  APPOINTMENTS_API_URL,
  ERROR_MESSAGES
}
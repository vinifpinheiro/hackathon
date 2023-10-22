// user.ts
export interface User {
  id: number;
  createdAt: Date;
  doc: string;
  name: string;
  phone: string;
  email: string;
  events: Event[];
}

// event.ts
export interface Event {
  nm_event: string;
  nm_user_id: number;
  date: Date;
  city: string;
  state: string;
  address: string;
  phone: string;
  description: string;
  type: string;
}

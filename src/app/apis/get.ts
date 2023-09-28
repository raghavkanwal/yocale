const baseUrl = 'http://localhost:3004';

export async function getUsers() {
    const res = await fetch(
      `${baseUrl}/users`
    );
  
    if (!res.ok) throw new Error(res.statusText);
    const text = await res.text();
    return text ? JSON.parse(text) : [];
}
  

export async function getTickets() {
    const res = await fetch(`${baseUrl}/tickets`);
    if(!res.ok) throw new Error(res.statusText);
    const text = await res.text();
    return text ? JSON.parse(text): [];
}

export async function getTicketDetail(id: string | null) {
  if(id) {
    const res = await fetch(`${baseUrl}/tickets/${id}`);
    if(!res.ok) throw new Error(res.statusText);
    const text = await res.text();
    return text ? JSON.parse(text): [];
  }
}
import axios from 'axios';
import type Reminder from '../models/reminder';

class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

  async getReminder() {
    const reponse = await this.http.get<Reminder[]>('/todos');

    return reponse.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>('/todos', {
      title,
    });

    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();

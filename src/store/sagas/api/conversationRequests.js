import { restrictedRoutes } from './axios-config';

export async function getAllConversations(params) {
  return await restrictedRoutes('/messages/allConversations');
}

export async function getConversation(params) {
  return await restrictedRoutes(`/messages/conversations/${params}`);
}

export async function deleteConversation(params) {
  return await restrictedRoutes.delete(`/messages/${params}`);
}

export async function sendMessage(body, id) {
  return await restrictedRoutes.post(`/messages/${id}`, body);
}

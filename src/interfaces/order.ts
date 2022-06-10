interface Order {
  id: number,
  userId:number,
}
  
interface OrderResponse extends Order {
  productsIds: number[]
}
  
export { Order, OrderResponse };
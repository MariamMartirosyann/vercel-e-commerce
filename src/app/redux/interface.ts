export interface IItemState {
    list: IItem[];
  }

  export interface IItem {
    id: number;
    src: string;
    srcHover: string;
    price:number;
  
  }

  export interface ICartItem extends  IItem{
    itemQuantity:number,

  }
  export interface ICartState{
    cartItems:ICartItem [],
  }

  export interface IState {
    items:IItemState,
    cart:ICartState
  }


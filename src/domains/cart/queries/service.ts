import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { DefaultResponse, ResultResponse } from '@/shared/types/response';
import {
  AddCartRequest,
  CartListResponse,
  ChangeCartOptionRequest,
  DeleteCartOptionsRequest,
  UpdateCartOptionRequest,
  UpdateCartOptionResponse
} from '../types/cart';

class CartService extends Service {
  async getCart() {
    const res = await this.fetchExtend.get('/customer/carts');
    const { result, success, code, message }: ResultResponse<CartListResponse> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async addCart(request: AddCartRequest) {
    const res = await this.fetchExtend.post('/customer/carts', {
      body: JSON.stringify(request)
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async updateCartOption(cartOptionId: number, request: UpdateCartOptionRequest) {
    const res = await this.fetchExtend.patch(`/customer/carts/options/${cartOptionId}`, {
      body: JSON.stringify(request)
    });
    const { result, success, code, message }: ResultResponse<UpdateCartOptionResponse> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async changeCartOption(cartOptionId: number, request: ChangeCartOptionRequest) {
    const res = await this.fetchExtend.patch(`/customer/carts/options/${cartOptionId}/option`, {
      body: JSON.stringify(request)
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteCartOptions(request: DeleteCartOptionsRequest) {
    const res = await this.fetchExtend.delete('/customer/carts/options', {
      body: JSON.stringify(request)
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }
}

const cartService = new CartService();
export default cartService;

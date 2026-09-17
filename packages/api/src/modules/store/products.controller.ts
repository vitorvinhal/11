import { Controller, Get, Post, Body } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

@Controller('store/products')
export class ProductsController {
  @Get()
  async list(): Promise<any> {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return { error: error.message };
    return data;
  }

  @Post()
  async create(@Body() product: { image_url: string; description: string; price: number }): Promise<any> {
    const { data, error } = await supabase.from('products').insert(product);
    if (error) return { error: error.message };
    return { message: 'Produto criado', product: data };
  }
}

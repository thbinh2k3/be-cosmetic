import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from './schemas/brand.schema';
import { Model } from 'mongoose';

@Injectable()
export class BrandService {
    constructor(
        @InjectModel(Brand.name) private brandModel: Model<Brand>,
    ) {}

    async create({ name, image}) {
        return await this.brandModel.create({name, image});
    }

    async findAll() {
        return await this.brandModel.find().exec();
    }
    
    async findById(id: string) {
        return await this.brandModel.findById(id).exec();
    }

    async update(id: string, { name, image }) {
        return await this.brandModel.findByIdAndUpdate(id, { name, image }, { new: true }).exec();
    }

    async delete(id: string) {
        return await this.brandModel.findByIdAndRemove(id).exec();
    }   
}
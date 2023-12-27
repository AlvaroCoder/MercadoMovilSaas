import {NextResponse} from 'next/server';
import {writeFile, unlink} from 'fs/promises'
import path from 'path';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

export async function POST(request) {
    const data = await request.formData();
    const image = data.get('image');
    if (!image) {
        NextResponse.json("No se ha subido la imagen",{status : 400})
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(),"public",image.name);
    await writeFile(filePath, buffer);

    const response = await cloudinary.uploader.upload(filePath,{
        folder : 'productos_mercadomovil'
    });

    await unlink(filePath);
    return NextResponse.json(response,{status : 200});
}
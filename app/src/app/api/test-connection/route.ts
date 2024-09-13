import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    return NextResponse.json({ message: 'Conexão ao MongoDB bem-sucedida!', dbName: db.databaseName });
  } catch (error: any) {
    console.error('Erro ao conectar ao MongoDB:', error);
    return NextResponse.json({ message: 'Falha ao conectar ao MongoDB.', error: error.message }, { status: 500 });
  }
}
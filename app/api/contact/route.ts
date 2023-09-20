import { sendMail } from '@/app/services/serviceEmail';

export async function POST(request: Request) {
  const { name, phone, email } = await request.json();
  // IMPORTANT remember that email from gmail must have enabled 2FA !!!!
  await sendMail(
    `Prośba o kontakt - ${name}`,
    'gromson101@gmail.com',
    `Prośba o kontakt na nr tel: ${phone} lub adres email: ${email}`,
    email
  );
  console.log({ name, phone, email });

  return new Response('Email został wysłany');
}

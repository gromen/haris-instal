import { sendMail } from '@/app/services/serviceEmail';

export async function POST(request: Request) {
  const { name, phone, email } = await request.json();
  try {
    // IMPORTANT remember that email from gmail must have enabled 2FA !!!!
    await sendMail(
      `Prośba o kontakt - ${name}`,
      'gromson101@gmail.com',
      `Prośba o kontakt na nr tel: ${phone} lub adres email: ${email}`,
      email
    );

    return new Response('Email został wysłany', { status: 200 });
  } catch (error) {
    console.error(error);

    return new Response(
      'Wystąpił błąd podczas wysyłania wiadomości email. Prosimy spróbować ponownie później',
      {
        status: 500,
      }
    );
  }
}

import { sendMail } from '../../service/serviceEmail';

export async function POST(request: Request) {
  const { name, phone, email } = await request.json();
  // IMPORTANT rememeber that email from gmail must have enabled 2FA !!!!
  await sendMail(
    `Prośba o kontakt - ${name}`,
    'gromson101@gmail.com',
    `Prośba o kontakt na nr tel: ${phone}`
  );
  console.log({ name, phone, email });

  return new Response('OK');
  // try {
  //   const { method } = request;
  //   switch (method) {
  //     case 'POST': {
  //       await sendMail(
  //         'TEST',
  //         'dontkillme@bunnyfiedlabs.com',
  //         'THI IS A TEST FOR MY MEDIUM USERS'
  //       );
  //       res.status(200).send('Success');
  //       break;
  //     }
  //     case 'GET': {
  //       res.status(200).send(req.auth_data);
  //       break;
  //     }
  //     default:
  //       res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
  //       res.status(405).end(`Method ${method} Not Allowed`);
  //       break;
  //   }
  // } catch (err) {
  //   res.status(400).json({
  //     error_code: 'api_one',
  //     message: err.message,
  //   });
  // }
}

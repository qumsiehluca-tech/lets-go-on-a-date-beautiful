import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req,res){

if(req.method !== "POST"){

return res.status(405).end();
}

const { day,time } = req.body;

try{

await resend.emails.send({

from: "Date Invite <onboarding@resend.dev>",

to: "qumsieh.luca@gmail.com",

subject: "She said yes 💖",

html: `
<h1>Date Accepted</h1>

<p><b>Day:</b> ${day}</p>

<p><b>Time:</b> ${time}</p>
`
});

res.status(200).json({
success:true
});

}catch(err){

console.error(err);

res.status(500).json({
success:false
});
}
}

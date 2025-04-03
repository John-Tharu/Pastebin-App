import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const savedata = async (title,syntex,paste) =>{
    const length = 6;
    let text = "";
    let lowercase  = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        text += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    //console.log(text);
    const check = await charCheck(text);
    //console.log(check);
    if (check.length == 0) {
        const save = await prisma.info.create({
            data : { title,syntex,paste,text }
        }) 
    }
    else{
        console.log("Shortcode is Already exists !!!");
    }
   
    }

export const showdata = async () =>{
    const show = await prisma.info.findMany({
        orderBy : {
            createdAt : 'desc',
        }
    });
    return show;
}

export const charCheck = async (text) =>{
    const char = await prisma.info.findMany({
        where : {
            text : text,
        }
    })
    return char;
}

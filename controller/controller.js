import { charCheck, savedata, showdata } from "../database/database.js";

export const homepage = async (req,res) =>{
    const data = await showdata();
    //console.log(data);
    res.render('index', {data});
}

export const pastebin = async (req,res) => {
    const { title,syntex,paste } = req.body;
    //console.log(title,syntex,paste);
    if (!title || !syntex || !paste) {
        console.log("Please Fill all the fields");
        res.redirect('/');
    }else{
        await savedata(title,syntex,paste);
        res.redirect('/');
    }
}

export const pastedMsg = async (req,res) =>{
    const text = req.params.text;
    //console.log(text);
    const check = await charCheck(text);
    if (check.length == 0) {
        console.log("The Message is not Found !!!");
        let check = [{
            title : "Untitled",
            syntex : "Unknown",
            paste : "Text not found !!!!"
        }]
        res.render('message', {check});
    }
    else{
        res.render('message', {check});
    }
}

export const timeAgo = (time) =>{
    console.log(time);
}
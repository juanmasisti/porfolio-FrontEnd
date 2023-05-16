export class persona{
    id?: number;
    banner: string;
    titulo: string;
    name: string;
    imagen: string;
    sobreMi: string;
    email: string;
    instagram: string;
    facebook: string;
    twitter: string;


    constructor(banner: string,titulo: string,name: string,imagen: string, sobreMi: string, instagram: string,facebook: string,twitter: string, email: string){
        this.banner = banner;
        this.titulo = titulo;
        this.name =name;
        this.imagen = imagen;
        this.sobreMi = sobreMi;
        this.email = email;
        this.instagram = instagram;
        this.facebook = facebook;
        this.twitter = twitter;
    }
}
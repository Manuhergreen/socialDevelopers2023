export interface userI{
    _id?: string;
    name: string;
    lastname: string;
    email:string;
    password:string;
    addnews: boolean;
    role?: string;
}

export interface userProfileI{
    _id: string;
    idUser: string;
    name: string;
    lastname: string;
    imagen: string;
    email: string;
    description: string;
    enlaceGit: string;
    enlaceLinkedin: string;
}

export interface projectsI{
    _id:string,
    idUserProf: string,
    nameProject: string;
    imagen: string;
    frameworks: string;
    description: string;
    enlaceGit: string;
    enlaceProyecto:string;
}




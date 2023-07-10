export interface userI{
    id?: string;
    name: string;
    lastname: string;
    email:string;
    password:string;
    addnews: boolean;
    role?: string;
}

export interface userProfileI{
    id: string;
    id_user: string;
    name: string;
    lastname: string;
    image_profile: string;
    email: string;
    addnews: boolean;
    description: string;
    enlace_git: string;
    enlace_linkedin: string;
}

export interface projectsI{
    id:string,
    id_userprof: string,
    name_project: string;
    imagen_project: string;
    frameworks: string;
    description: string;
    enlace_git: string;
    enlace_proyecto:string;
}




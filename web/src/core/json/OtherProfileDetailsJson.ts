import ImageAssets from "src/assets";

export const skills : string[] = ['React', 'Redux-saga', 'MaterialUI', 'NodeJs', 'PostgreSQL', 'Reddis', 'MongoDB','Html','Css']

export const educations : {icon:string,type:string,detail:string }[] = 
                          [ {icon:ImageAssets.ic_group_icon,type:'Work',detail:'abcd tech'},
                            {icon:ImageAssets.ic_suitcase_icon,type:'College', detail:'efgh college'},
                            {icon:ImageAssets.ic_group_icon,type:'School',detail:'ijkl school'}
                          ] 

export const contactDetails :{icon:string,type:string,detail:string }[] = 
                              [{icon:ImageAssets.ic_email_icon, type:'email',detail:'email@email.com'},
                                {icon:ImageAssets.ic_phone_call_icon, type:'phone_number',detail:'+91 99 99 99 99 99'}
                                ]
                            
export const address : {icon:string,type:string,detail:string }[] = [{icon:ImageAssets.ic_city_icon, type:'city',detail:'Bangalore'},
                        {icon:ImageAssets.ic_flag_icon, type:'country',detail:'India'}
                        ]     

export const socialMediaDetails : {icon:string,platform:string,detail:string }[] = 
                              [ {icon:ImageAssets.ic_instagram_icon,platform:'instagram',detail:'instagram_url.link'},
                                    {icon:ImageAssets.ic_facebook_icon,platform:'facebook',detail:'facebook_url.link'},
                                    {icon:ImageAssets.ic_pinterest_icon,platform:'pinterest',detail:'pinterest_url.link'},
                                    {icon:ImageAssets.ic_youtube_icon,platform:'youtube',detail:'youtube_url.link'},
                                ]

export const profileDesc : { profileName: string, fullName: string, skills: string, description: string, website: string }= {
                      profileName :'saccystacey212',
                      fullName : 'Stacey Kibbler',
                      skills : 'Visual Designer and Artist',
                      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ipsa recusandae quis voluptates
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ipsa recusandae quis voluptates`,
                      website : 'Website Link'
                      }  

export const ProfileDetails={
                            basic_info:{title:'Basic Info',data:profileDesc},
                            skill:{title:'Skills',data:skills},
                            edu_info:{title:'Educational Info',data:educations},
                            contact_info:{title:'Contact Info',data:contactDetails},
                            address:{title:'Address',data:address},
                            social_media:{title:'Social Media Links',data:socialMediaDetails}
                          }
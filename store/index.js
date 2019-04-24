export const state = () => ({
  sections: {
    varnamala: {
      slug: 'varnamala',
      title: 'नेपाली वर्णमाला',
      alt: 'Varnamala',
      description: 'haha huhua sadsal;kd <br/>aksjdksajd asd',
      thumbnail: '/img/sections/varnamala.jpg',
      youtube: 'https://www.youtube.com/playlist?list=PLJ997Q88AEvkO8El-Lo_knCcQlwj6IUUs',
      children: [
        {
          title: 'वर्णमाला - १ [क ख ग घ ङ]',
          youtube: 'https://www.youtube.com/watch?v=Devk7ZFzM-s'
        },
        {
          title: 'वर्णमाला - २ [च छ ज झ ञ]',
          youtube: 'https://www.youtube.com/watch?v=bi7E7-HHcl0'
        }
      ]
    },
    swarmala: {
      title: 'स्वरमाला',
      alt: 'Swarmala',
      thumbnail: '/img/sections/swarmala.jpg'
    }
  }
})

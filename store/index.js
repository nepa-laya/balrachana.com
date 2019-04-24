export const state = () => ({
  sections: {
    varnamala: {
      slug: 'varnamala',
      title: 'नेपाली वर्णमाला',
      subtitle: '[ क - ज्ञ ]',
      alt: 'Varnamala',
      description: 'रचना तथा संगीत: आभास<br/>गायन: मीना निरौला र बेनुका राई',
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
      title: 'स्वर-संसारमा अक्कलमान',
      subtitle: '[ अ आ इ ई ]',
      alt: 'Swarmala',
      // slug: 'swarmala',
      thumbnail: '/img/sections/swarmala.jpg'
    },
    maina_aina: {
      title: 'मैनाले हेर्यो ऐना',
      subtitle: 'र अरु बालगीत',
      alt: 'Mainle Heryo Aina',
      // slug: 'maina_aina',
      thumbnail: '/img/sections/mainale_heryo_aina.jpg'
    },
    chhotu_motu_aunla: {
      title: 'छोटु मोटु औंला',
      subtitle: 'र अरु बालगीत',
      alt: 'Chhotu Motu Aula',
      // slug: 'chhotu_motu_aunla',
      thumbnail: '/img/sections/chhotu_motu_aula.jpg'
    },
    myau_myau_biralo: {
      title: 'म्याउ म्याउ बिरालो',
      subtitle: 'र अरु बालगीत',
      alt: 'Meow Meow Biralo',
      // slug: 'myau_myau_biralo',
      thumbnail: '/img/sections/myau_myau_biralo.jpg'
    },
    cham_cham_tara: {
      title: 'चम् चम् तारा',
      subtitle: 'र अरु बालगीत',
      alt: 'Cham Cham Tara',
      // slug: 'cham_cham_tara',
      thumbnail: '/img/sections/cham_cham_tara.jpg'
    }
  }
})

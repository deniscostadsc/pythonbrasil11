module.exports = {
  prompts: false,

  templateData: {

    conf: {
      name: "Python Brasil[11]",
      description: "Brazilian Python Conference",
      date: "October 13-17",
      venue: "Parque Tecnológico",
      address: "Avenida Doutor Altino Bondensan, 500",
      city: "São José dos Campos",
      state: "São Paulo"
    },

    forkButton: {
      repository: "https://github.com/deniscostadsc/pythonbrasil11"
    },

    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: ""
    },

    sections: [
      'about',
      'location',
      // 'speakers',
      // 'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    schedule: [],

    sponsors: [],

    partners: [],

    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    getUrl: function() {
      return this.site.url;
    }
  }
};
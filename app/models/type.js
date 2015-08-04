import DS from 'ember-data';

let Type = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string')
});

Type.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "IPA",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC"

    },
    {
      "id": 2,
      "name": "Stout",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC"
    },
    {
      "id": 3,
      "name": "Lager",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC"
    },
    {
      "id": 4,
      "name": "Sour",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC"
    },
    {
      "id": 5,
      "name": "Belgian",
      "image": "http://www.scientificamerican.com/sciam/cache/file/BCEF876F-3D0B-4AB4-85DA1CE566DA2DA8_article.jpg?8F1BC"
    }
  ]
});

export default Type;

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movies_actors', {
    id_movies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    id_actors: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'actors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movies_actors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_actors" },
          { name: "id_movies" },
        ]
      },
      {
        name: "FK__movies",
        using: "BTREE",
        fields: [
          { name: "id_movies" },
        ]
      },
    ]
  });
};

module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_Movie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'actor_movie'
    };
    const Actor_Movie = sequelize.define(alias, cols, config);

    // Establece las relaciones con otros modelos
    Actor_Movie.associate = (models) => {
        Actor_Movie.belongsTo(models.Movie, {
            as: 'movie',
            foreignKey: 'movie_id'
        });

        Actor_Movie.belongsTo(models.Actor, {
            as: 'actor',
            foreignKey: 'actor_id'
        });
    };

    return Actor_Movie;
};

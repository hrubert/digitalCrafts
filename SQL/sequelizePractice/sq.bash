sequelize model:generate --name album2 \
    --attributes albumName:string,year:integer,ArtistID:integer

sequelize db:migrate
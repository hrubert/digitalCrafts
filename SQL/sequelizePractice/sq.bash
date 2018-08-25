# sequelize model:generate --name album2 \
#     --attributes albumName:string,year:integer,ArtistID:integer

# sequelize db:migrate

# sequelize model:generate --name artist \
#     --attributes name:string

sequelize db:migrate

# sequelize model:generate --name song2 \
#     --attributes name:string,duration:'TIME',albumID:uuid
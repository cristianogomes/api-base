# api-base

#### Sequelize

```bash
# Criar um novo model
$ node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

# Criar um migration
$ node_modules/.bin/sequelize migration:create --name=create-teste

# Executar todos os migrations
$ node node_modules/.bin/sequelize db:migrates

# Criar um novo seed
$ node_modules/.bin/sequelize seed:generate --name teste

# Executar todos os seeds
$ node_modules/.bin/sequelize db:seed:all

# Desfazer todos os seeds
$ node_modules/.bin/sequelize db:seed:undo:all
```

docker build --no-cache -f SQL\Dockerfile.PostgreSql -t operacionnoe_podrazdelenie/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t operacionnoe_podrazdelenie/app ../..

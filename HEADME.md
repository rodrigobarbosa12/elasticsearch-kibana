# passo a passo

### Suba os containers elasticsearch e o kibana com docker
    sudo docker-compose up -d

### Verifica se o elasticsearch está rodando
    http://localhost:9200


### Verifica se o kibana está rodando
    http://localhost:5601


#### Depois que o elasticsearch e o kibana estiverem ok, suba o servidor node
    yarn dev

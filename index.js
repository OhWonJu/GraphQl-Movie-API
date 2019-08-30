// const graphqlYoga = require("graphql-yoga");

import { GraphQLServer } from "graphql-yoga";

// 서버 생성
const server = new GraphQLServer({
  // 환경 설정
});

server.start(() => console.log("GraphQl Server Running"));
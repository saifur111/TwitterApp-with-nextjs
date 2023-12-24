import Form from "@/components/Form";
import { Header } from "../components/Header";
import TimelineContainer from "../modules/timeline/Container";
import prisma from "../util/prisma-connection";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'mdsaifur.cse.98@gmail.com'
    }
  })
  console.log(JSON.stringify(user));
  return (
    <>
      <Header label='Home'/>
      <Form placeholder="Start your tweet ..." />
      <TimelineContainer/>
    </>
  )
}

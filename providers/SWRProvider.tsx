import { Props } from "@/util/definations";
import { SWRConsumer } from "./SWRConsumer";
import { fetcher } from "@/libs/fetcher";
const baseUrl=process.env.NEXT_PUBLIC_API_SERVER;
async function getInitialData() {
    const res =await fetcher(baseUrl+'/api/current');
    const json =await res.json();
    const data={
        '/api/current':json,
    }
    return data;
}
export default async function SWRProvider({children}:Props){
    const data =await getInitialData();
    return <SWRConsumer initialData={data}>
        {children}
    </SWRConsumer>
}



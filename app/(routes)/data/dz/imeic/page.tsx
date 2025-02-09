import { Badge, Box, Button } from "@mantine/core";
import HeaderMegaMenu from "../../../../Components/HeaderSimple";
import Djs from "../../../../Components/dz_Countdown_time"
import classes from "../../../../Components/css/Demo.module.css";
import data from "../../../../Data/2025/dz_Data"
import { TableScrollArea } from "../../../../Data/2025/imeic/data"

export default function DzPage() {
    return (
        <>
            <HeaderMegaMenu />
            <div style={{ maxWidth: '1140px', margin: 'auto', marginTop: '16px' }}>
                <Djs />
                <br />
                <Badge color={data[2].Labels.Cor_c.Color} variant="light">{data[2].Labels.Cor_c.svg} {data[2].Labels.Cor_c.name}</Badge>
                <Badge color={data[2].Labels.Warnings.Color} variant="light">{data[2].Labels.Warnings.svg} {data[2].Labels.Warnings.data}</Badge>
                <Badge color={data[2].Labels.people.Color} variant="light">{data[2].Labels.Warnings.svg} {data[2].Labels.people.data}</Badge>
                <br /><br />
                <Box className={classes.box}> 内蒙古电子信息职业技术学院  <span className={classes.highlight}> 报名代码: {data[1].CodePaste}</span></Box>
                <h4>
                    {data[2].company.Content}
                    <Button
                        component="a"
                        href={data[1].Labels.Website_url.url1}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                        color="teal"
                        size="xs"
                    >
                        原链接
                    </Button>
                </h4>
                <TableScrollArea />
            </div>
        </>
    );
}
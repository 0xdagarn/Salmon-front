import React, { useEffect } from "react";
import {
    StackedCarousel,
    ResponsiveContainer
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
    {
        video: "https://rr1---sn-3pm76nee.c.drive.google.com/videoplayback?expire=1685839721&ei=Kad7ZPzcKZSS_tcP1pm0yAg&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFdQQlhPOm5CdnBZUmpRVnZ0SVY4R1pSWXRkMzAtMk9oY2dpajcwYVhJUFJJcS14UFQ&id=86d0a08171b739e9&itag=22&source=webdrive&requiressl=yes&mh=9m&mm=32&mn=sn-3pm76nee&ms=su&mv=m&mvi=1&pl=38&ttl=transient&susc=dr&driveid=1M_1j656urFrL47M_I7pnRq5nm6M7QaxB&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=9.543&lmt=1685822600662356&mt=1685824831&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIge8rNwL4ULypYNPZdvJ4DZs_Nxr6yTIn-CAkqvNR31WMCIAKyInfhjAI79ZYli5EjSsH88r3T4-P0bZ1mlQFqS-pZ&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgIr-2GYHfmUlGdzMAhfcvmXefHL3ahdFM4aNfTxqjGBUCIQDcNgNfftpbO7_8CkvxUMh9lbUiCZssb8hL2DE6Scxc5g==&cpn=rRgQF5nTzUIDS1pz&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    },
    {
        video: "https://rr4---sn-3pm7knel.c.drive.google.com/videoplayback?expire=1685839853&ei=rad7ZOGpCumQ_tcPm-ek0AM&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFhTRFhPOm5CdnBaVWxRVnZ0SVY4SENUWXRkMzAtMlBrZWdpajcwYVhKU1RJcS14UFQ&id=0f2a0073f682b0d3&itag=22&source=webdrive&requiressl=yes&mh=-A&mm=32&mn=sn-3pm7knel&ms=su&mv=m&mvi=4&pl=38&ttl=transient&susc=dr&driveid=1JFK5OvKk_WYUnHqPjn93N98inXEF7vlP&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=9.891&lmt=1685822818591151&mt=1685825071&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAJEiZ0TQP8yb7189MsXYInExtYsN2tdjh5Cywd3P7dosAiEAmuO6E5GNjQTKKQ6Ex1r9YjXB5XBjmiFV8Dat9M_eJkA=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMzreATDneXwJLcgn63i1qm6_TiACZ3fT1tvv2YaRTQ7AiBphjgV8MfScYtLqIPm1dify5HEGrHhDiCJiISG8QQIQw==&cpn=aQ5EZDTwpxrhG0ak&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    },
    {
        video: "https://rr2---sn-3pm7dnl7.c.drive.google.com/videoplayback?expire=1685839879&ei=x6d7ZKL2Aeioir4PrtGqwAY&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFhVSlhPOm5CdnBaV3JRVnZ0SVY4SEVaWXRkMzAtMlBta2dpajcwYVhKVVpJcS14UFQ&id=8d1e2ac7fe5bf010&itag=22&source=webdrive&requiressl=yes&mh=qW&mm=32&mn=sn-3pm7dnl7&ms=su&mv=m&mvi=2&pl=38&ttl=transient&susc=dr&driveid=13ukkSdJT2JC67NENrRWGjhIRY719j8r0&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=10.263&lmt=1685822975378318&mt=1685825314&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhANmv8f-BAMHodaqkUHkvVD2VxFJnaVf0YC6AM7hvdDJ9AiAvAd8KI1hKDDQaZksBRQWVA2Yy-xTaQuK0s5wUCrN5Rg==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAP6nqzd3escubzRMwQSL7F9uRGLuo95O4szXVYpM4uEYAiEA4jeKdmuwDmGbO9PVcCdCkTJoXsREyMkViuNQhwPDbCM=&cpn=wr3Hwa9Mo_KpyjCu&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    },
    {
        video: "https://rr3---sn-3pm7knee.c.drive.google.com/videoplayback?expire=1685839910&ei=5qd7ZKSYBtXjiwTLv42YDA&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFlPQVhPOm5CdnBBUWlRVnZ0SVY4SVlRWXRkMzAtMlFnYmdpajcwYVhLT1FJcS14UFQ&id=038a08294c2f69e3&itag=22&source=webdrive&requiressl=yes&mh=mX&mm=32&mn=sn-3pm7knee&ms=su&mv=m&mvi=3&pl=38&ttl=transient&susc=dr&driveid=1BjBUHM1pPwy5M9zpUu3eWEK1qf4BOt7F&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=11.029&lmt=1685823043972827&mt=1685825071&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAPahg86KDHp2_0fhTzfGwv6v2BGIvatY-DqQEMlLhp5tAiEAu3yNm6iKVDxydS0Avin9V8AKAYOYiQcr3YPzHveHBss=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKrqQRFT9bgxAfFt6GOGgZU2VxvkP5HPqmwzM6spaE8yAiEAxDRguC12KV_JyFUDQDjJ-gXTD9_GI8KNnxlEOe7wmmE=&cpn=C4cqqyLw9dqnv4EV&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    },
    {
        video: "https://rr5---sn-3pm7dnes.c.drive.google.com/videoplayback?expire=1685839950&ei=Dah7ZIu2PKSmir4Pyc6YiAQ&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFlTQVhPOm5CdnBBVWlRVnZ0SVY4SUNRWXRkMzAtMlFrYmdpajcwYVhLU1FJcS14UFQ&id=553111d9451d6086&itag=22&source=webdrive&requiressl=yes&mh=1U&mm=32&mn=sn-3pm7dnes&ms=su&mv=m&mvi=5&pl=38&ttl=transient&susc=dr&driveid=1326a6gH672d2eKcijx2X0ebgaaZ0n_bT&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=11.029&lmt=1685823184234147&mt=1685825071&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAMxGsscVQKbcCDQmetflISTrPsyjDdQTe9qLHuov82oJAiBvOGkoKCNP-GXai1Q68byHgjbMS_TIU1n2yA7pwgMxbA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgYGFDhCAsPB9va1DKWLz9q5thIHsfzjPuxcvpTlWc3W0CIQDM4ch3evzlK9olvoN8M2jwEbbicSSTHnHW0av9cU525g==&cpn=x-aIwrSSjeqsyYBd&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    },
    {
        video: "https://rr1---sn-3pm7dne6.c.drive.google.com/videoplayback?expire=1685839975&ei=J6h7ZKesKZujir4Pu524kAE&ip=2001:e60:9257:ba4e:ecbb:95b9:44c4:8940&cp=QVRNV0lfWFlVRlhPOm5CdnBBV25RVnZ0SVY4SUVWWXRkMzAtMlFtZ2dpajcwYVhLVVZJcS14UFQ&id=716c37b131d01eda&itag=22&source=webdrive&requiressl=yes&mh=o-&mm=32&mn=sn-3pm7dne6&ms=su&mv=m&mvi=1&pl=38&ttl=transient&susc=dr&driveid=15dEdoGRMk9Mn51BUuRGAKt7MRZRbvhy0&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=11.145&lmt=1685822729813601&mt=1685825314&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAPJ7IBT5pjep7lvqmJ5Q-gyMYlBW38DPGHcKTwW-xmxsAiEAh3cmZNFfcMnZrRLEFlej3bhEI-n7cZX-EGVjdSNTYko=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOK6n5h9iIyhnj39SNrcXCQf-peLcRqz1YV0dzfmNj6vAiEAkFuyPzTofeM18VMYVJ32Keyg8RHItLuDeEbldeHDtxM=&cpn=tfx1ZykFiKkoE-fQ&c=WEB_EMBEDDED_PLAYER&cver=1.20230530.01.00",
        text: "Russia’s First Attack on Ukraine",
        user: 'Content Creater',
        image: "https://i.ytimg.com/vi/2QZUxjzYVzE/maxresdefault.jpg",
    }
];

const PageView = ({onChange}) => {
    const ref = React.useRef(StackedCarousel);
    //   function onNext(){
    //      ref.current?.goBack(), 5000;
    // }

    function stuff() {
        ref.current.goNext();
    }

    return (
        <div className="card">
            <div style={{ width: "100%", height: '100%', position: "relative"}}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(width, carouselRef) => {
                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Slide}
                                slideWidth={876}
                                height={580}
                                carouselWidth={width}
                                data={data}
                                maxVisibleSlide={5}
                                customScales={[1, 0.85, 0.7, 0.55]}
                                transitionTime={450}
                                fadeDistance={0.5}
                                onActiveSlideChange={onChange}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default PageView;

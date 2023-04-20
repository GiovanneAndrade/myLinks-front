import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];


function Media(props) {
  const { loading = false, reversedArray  } = props;
 
  return (
    <Grid container gridColumn={3}sx={{ justifyContent: 'center' }}>
      {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
        <Box
          key={index}
          sx={{
            width: 510,
           paddingRight:5,
            my: 3,
           
          }}
        >
          {item ? null : (
            <Box>
              <Skeleton
                width={470}
                height={35}
               
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
               
                }}
              />
              <Box sx={{ pt: 0.5, display: "flex", gap: "10px",px:1}}>
                <Skeleton variant="rectangular" width={110} height={100} />
                <Box
                  sx={{
                    pt: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    paddingTop: 0,
                  }}
                >
                  <Skeleton variant="rectangular" width={350} height={80} />{" "}
                  <Skeleton variant="rectangular" width={350} height={10} />
                </Box>
              </Box>
            </Box>
          )}
          {item ? (
            <Box sx={{ pr: 3 }}></Box>
          ) : (
            <Box sx={{ pt: 0.5}}>
              <Skeleton width={455} style={{marginTop:'10px', marginLeft:'8px'}}/>
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function YouTube(props) {
  
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media reversedArray={props.reversedArray} />
    </Box>
  );
}

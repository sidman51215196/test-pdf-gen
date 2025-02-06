// import * as React from 'react';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function MUIdemo() {
//   return (
//     <div>
//       <Checkbox {...label} defaultChecked />
//       <Checkbox {...label} defaultChecked color="secondary" />
//       <Checkbox {...label} defaultChecked color="success" />
//       <Checkbox {...label} defaultChecked color="default" />
//       <Checkbox
//         {...label}
//         defaultChecked
//         sx={{
//           color: pink[800],
//           '&.Mui-checked': {
//             color: pink[600],
//           },
//         }}
//       />
//       <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab variant="extended" size="small" color="primary">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Extended
//       </Fab>
//       <Fab variant="extended" size="medium" color="primary">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Extended
//       </Fab>
//       <Fab variant="extended" color="primary">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Extended
//       </Fab>
//     </Box>
//     </div>
    
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function MUIdemo() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Uncontrolled</Typography>
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={2}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

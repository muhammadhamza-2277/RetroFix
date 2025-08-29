import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';

export default function InfoSection() {
  const theme = useTheme();
  const styles = {
    infoSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      background: "#eaf5ed",
      padding: "30px 60px",
      gap: "40px",
      flexWrap: "wrap"
    },
    benefitsBox: {
      flex: 1.6,
      minWidth: "400px",
      padding: "30px",
      borderRadius: "12px"
    },
    eligibilityBox: {
      flex: 1.6,
      minWidth: "450px",
      paddingTop: "150px"
    },
    heading: {
      color: "#2c3e50",
      fontSize: "35px",
      marginBottom: "20px"
    },
    benefitsList: {
      listStyle: "none",
      padding: 0
    },
    benefitsListItem: {
      marginBottom: "12px",
      fontSize: "18px",
      color: "#000",
      lineHeight: 1.6,
      paddingLeft: "10px"
    },
    eligibilityText: {
      fontSize: "16px",
      marginBottom: "20px",
      color: "#444",
      paddingLeft: "20px"
    },
    checkBtn: {
      padding: "12px 26px",
      backgroundColor: "#098765",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginLeft: "30px",
      marginTop: "20px"
    }
  };

  const benefits = [
    "✅ Lower energy bills (save up to 20% annually*)",
    "✅ Increases property value and buyer appeal",
    "✅ Prevents damp and wall damage",
    "✅ Warmer, more comfortable living",
    "✅ Enhances exterior appearance",
    "✅ Keeps full interior space",
    "✅ Reduces outside noise",
    "✅ Boosts your EPC rating"
  ];

  return (
    <section style={styles.infoSection}>
      <div style={styles.benefitsBox}>
        <h2 style={styles.heading}>🎯 Key Benefits</h2>
        <ul style={styles.benefitsList}>
          {benefits.map((item, index) => (
            <li key={index} style={styles.benefitsListItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.eligibilityBox}>
        <h2 style={styles.heading}>🏠 Check Your Eligibility</h2>
        <p style={styles.eligibilityText}>
          Let us help you improve your home's comfort and energy efficiency.
        </p>
        {/* <button
          style={styles.checkBtn}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6600")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#098765")}
        >
          Check Eligibility
        </button> */}
        <Button variant="filled" component={Link} to="/check-eligibility" >Check Eligibility</Button>
      </div>
    </section>
  );
}

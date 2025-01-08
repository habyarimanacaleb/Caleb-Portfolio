const Footer = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' }); // Full month name
// const date = today.getDate();
const year = today.getFullYear();
    return (
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; Caleb Habyarimana {month}/ {year}. All Rights Reserved.</p>
        <div className="flex justify-center mt-4">
      <a href="https://www.linkedin.com/in/habyarimanacaleb/" className="mr-4">LinkedIn</a>
      <a href="https://github.com/in/habyarimanacaleb/" className="mr-4">GitHub</a>
      <a href="https://instagram.com/in/habyarimanacaleb">Twitter</a>
    </div>
      </footer>
    );
  };
  
  export default Footer;
  
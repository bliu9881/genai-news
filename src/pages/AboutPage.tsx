function AboutPage() {
  return (
    <div className="page">
      <h1>About</h1>
      <div className="about-content">
        <p>Welcome to our Todo Application! This app is built with:</p>
        <ul>
          <li>React + TypeScript</li>
          <li>AWS Amplify</li>
          <li>Amazon Cognito for authentication</li>
          <li>AWS AppSync for the API</li>
          <li>Amazon DynamoDB for the database</li>
        </ul>
        <p>
          Use this application to manage your daily tasks and stay organized.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

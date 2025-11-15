import GitHubCalendar from "react-github-calendar";

export default function GitStats() {
  return (
    <div className="conatiner text-center mx-auto mt-5 mb-5">
        <h2 className="mb-4 fs-4">My GitHub Contributions</h2>
        <div className="offset-2">
      
      <GitHubCalendar username="sahilsheikh230"  /></div>
    </div>
  );
}

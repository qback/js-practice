function calculateGrade(score, max = 100) {
  const percent = score / max * 100;
  const grade = percent >= 90 ? 'A' : percent >= 80 ? 'B' : percent >= 70 ? 'C' : percent >= 60 ? 'D' : 'F';
  return `Твой процент - ${percent}%, а оценка - ${grade}`;
}

console.log(calculateGrade(100, 200));

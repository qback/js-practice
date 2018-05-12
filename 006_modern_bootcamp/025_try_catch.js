function calculateGrade(score, max = 100) {
  if (typeof score !== 'number' || typeof max !== 'number') {
    throw Error('arguments need to be numbers');
  }
  const percent = score / max * 100;
  const grade = percent >= 90 ? 'A' : percent >= 80 ? 'B' : percent >= 70 ? 'C' : percent >= 60 ? 'D' : 'F';
  return `Твой процент - ${percent}%, а оценка - ${grade}`;
}

try {
  console.log(calculateGrade('123', 100));
} catch (er) {
  console.log(er.message);
}

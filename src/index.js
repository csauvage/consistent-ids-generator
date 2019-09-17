/* @flow */
export default function hashGenerator(input: string) {
  return input ? `👉 ${input} 👈` : 'No args passed!';
}

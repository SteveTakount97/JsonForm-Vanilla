import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers, vanillaCells  } from '@jsonforms/vanilla-renderers';
import { schema, uischema } from './data/schema'; // Importe ton schema et uischema

const MyForm = () => {
  const [data, setData] = useState({});

  return (
    <div>
      <h1>Mon Formulaire JSONForms</h1>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data }) => setData(data)}
      />
    </div>
  );
};

export default MyForm;

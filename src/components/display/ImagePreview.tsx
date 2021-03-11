import { Img } from '@chakra-ui/react';
import React from 'react';

interface Props {
	url: string;
}

export const ImagePreview: React.FunctionComponent<Props> = (_props) => {
	return (
		<Img marginY='2rem' src={_props.url} maxH='20vh' alt='image preview'
			style={{ filter: 'drop-shadow(0.25rem 0.25rem 0.5rem #16161D)' }} />
	);
};